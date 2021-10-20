---
id: pallets
title: Pallets
slug: architecture/pallets
---

## Basic bounty workflow

Currently we implement a basic workflow which support OneFunderOneHunter bounty collaboration. You can check the details in the bounty workflow section. But you can check following content for a general view.

### Roles:

- Funder: who create and fund bounty.
- Hunter: who hunt bounty and work for the assigned bounty.
- Council: who review funders' bounty application and give feedback(yes or no). 

### A example workflow 

1. Alice(funder) create a bounty with 1000 native token funded, and waiting for the council to review.
2. The council review the bounty and give the review result(Yes or No).
3. Bob(hunter) can see the bounty and do hunting for the bounty.
4. Alice see the hunting for the bounty and assign the bounty to Bob.
5. Bob finish the work and do a submission for the bounty.
6. Alice resolve the bounty and give Bob 'Perfect' remark. Several things will happen:
    - Then 900 will be sent to Bob, while 100 will be sent to the council. 
    - Bob will get 2 times reputation added, one for resolving the bounty and another for the remark. 
    - Alice and Bob will get mining power. The total power will be decided by the fee the council got, and 90% of the power will be assigned to funder and 10% to hunter.
7. Bob give a 'Perfect' remark to Alice, and then Alice will get a reputation grow.

## Pallets
  
We build our business based on [Substrate](https://github.com/paritytech/substrate). There are mainly 3 pallets involved to support the business.

- [bounties](https://github.com/opensquare-network/opensquare/tree/w3f-m1-0/ospallet/bounties) pallet manages the lifecycle of a bounty.
- [reputation](https://github.com/opensquare-network/opensquare/tree/w3f-m1-0/ospallet/reputation) pallet manages each role's reputation.
- [mining](https://github.com/opensquare-network/opensquare/tree/w3f-m1-0/ospallet/mining) pallet manages users' session related mining power and handle the native token mint logic.

Functions in reputation and mining pallets will be called by some calls in bounties pallet. For example: 
- When [resolve_bounty_and_remark](https://github.com/opensquare-network/opensquare/blob/w3f-m1-0/ospallet/bounties/src/lib.rs#L201) is called, [add_behavior_score_by_behavior](https://github.com/opensquare-network/opensquare/blob/w3f-m1-0/ospallet/reputation/src/lib.rs#L49), 
[add_mining_power](https://github.com/opensquare-network/opensquare/blob/w3f-m1-0/ospallet/mining/src/lib.rs#L113) will be called to add reputation nd mining power to hunter.
- When [remark_bounty_funder](https://github.com/opensquare-network/opensquare/blob/w3f-m1-0/ospallet/bounties/src/lib.rs#L248) is called, [add_behavior_score_by_behavior](https://github.com/opensquare-network/opensquare/blob/w3f-m1-0/ospallet/reputation/src/lib.rs#L49) is called to add funder's reputation.

### bounties pallet

The bounties module provide management for bounties. Generally speaking, it facilitate the collaborations between
funders, hunters and the council.

#### Funder calls
- `create_bounty`: Create a bounty and deposit the fund, and this bounty will be reviewed by the council.
- `assign_bounty`: Assign the bounty to one applicant.
- `close_bounty`: Close the bounty.
- `resolve_bounty_and_remark`: Resolve the bounty and the fund will be sent to the assigned hunter, while some fee will be charged by the council.

#### Hunter calls

- `hunt_bounty`: Apply a accepted bounty.
- `submit_bounty`: Submit the work result for the assigned bounty.
- `cancel_bounty`: Cancel the application for the bounty.
- `resign_from_bounty`: Resign from a assigned bounty.
- `remark_bounty_funder`: Remark the bounty funder after the funder resolve the bounty and give the remark to hunter.

#### Council calls

- `examine_bounty`: Give the review result for a bounty.
- `force_close_bounty`: Force close a bounty. The reasons may include outdated description, longtime no applicants.

### reputation pallet

#### Terminology

- CollaborationUnit: A interaction of between roles of OpenSquare.
- CollaborationResult: The result of a collaboration, usually the result will be with a enum type.
- Behavior: It'a union of all collaboration results.


#### Current Behaviors defined

```rust
#[cfg_attr(feature = "std", derive(Serialize, Deserialize))]
pub enum BountyResolveCollaborationResult {
    Success,
    Fail,
}

#[derive(PartialEq, Eq, Clone, Encode, Decode, RuntimeDebug)]
#[cfg_attr(feature = "std", derive(Serialize, Deserialize))]
pub enum BountyRemarkCollaborationResult {
    Bad,
    NotGood,
    Fine,
    Good,
    Perfect,
}

// Behavior represent the general collaboration result
#[cfg_attr(feature = "std", derive(Serialize, Deserialize), serde(untagged))]
pub enum Behavior {
    BountyResolve(BountyResolveCollaborationResult),
    BountyRemark(BountyRemarkCollaborationResult),
}
```

#### Reputation Score

Each Behavior(CollaborationResult) has a corresponding reputation score.

#### Interfaces

```rust
fn add_behavior_score_by_behavior(target: &AccountId, behavior: &Behavior);
```

This interface will be called in collaboration modules(bounties). The `behavior` param will be different based on the caller module's business.

### mining pallet

#### Terminology

- Session: Each session contains a fixed number of blocks(currently 43200).
- SessionIndex: It begins with 0 and grows 1 after each 43200 blocks.

#### Mining logic

One session is a mining period, while the max of the total mint token will be 1% of the total issuance. The mint token 
can be claimed after the session, and each miners' mining power will decide how much token they can claim.

For example, total issuance is 10,000, and total mining power is 100, while Alice's mining power is 10. So Alice can mine 
10 / 100 * 10000 * 0.01 = 10 in this session.

The mining power is decided by the fee the council charged. For example, the bounty fund total 1000 OSN and 50 will be charged by the council. 
The total mining power for this bounty will be 50 * OSN_currency_ration. Each currency has a currency ratio, and currency ratio of OSN is 1.
So 50 will be the total mining power for the bounty. Funder and hunter will get 90% and 10% of the mining power, so funder get 45 and hunter get 5.

#### Interfaces

- `claim(session_index: SessionIndex)`: Claim the native token based on the caller's mining power for the target session.
- `add_mining_power(target: &T::AccountId, power: MiningPower)`: Called by other modules to add mining power for one target account.
- `add_session_total_mining_power(power: MiningPower)`: Called by other modules to add the session total mining power.