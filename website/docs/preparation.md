---
id: preparation
title: Preparation
slug: /getting-started/preparation
---

This chapter, we will guide you through a complete process of a Bounty flow. We assume that the reader already know how to use [Polkadot Extension](https://github.com/polkadot-js/extension), this tutorial will use it to manage our accounts. If you don't have it, please install and learn about it before starting.

## Import councilor account

In the OpenSquare testnet, it has a built-in councilsor account, which has enough funds and privileges to go though the whole process. If you have the councilor account seed, please import it into your Polkadot Extension.

![Import account from per-existing seeds](/figure/Selection_546.png)

When importing, please give it a descriptive name `Councilor`, which is convenient for mentioning and using it later.

![Account descriptive name](/figure/Selection_600.png)

## How to sign in?

Basically all actions that will change the state of the system can only be done after signing in. To sign in to the system, just click on the `Sign In` in the upper right corner and select an account in the pop-up box.

![Sign in](/figure/Selection_556.png)

## How to sign out?

To sign out of the current account, click on the account name in the upper right corner to open the user profile. You can find a sign-out icon next to the avatar and account name. Just click on it to sign out.

![Sign out](/figure/Selection_560.png)

## Prepare the other two required accounts

Currently, we only have a councilor account, which is not enough. In order to test the Bounty process, at least two more accounts are required to play different roles .

Next we create them.

### Create `Funder` and `Hunter` account

Use Polkadot Extension to create two accounts, give them descriptive name `Funder` and `Hunter`.

![Create Funder and Hunter account](/figure/Selection_549.png)
![All accounts](/figure/Selection_553.png)

### Transfer funds to two newly created accounts

Because in the following test, these two accounts must hold a certain amount of funds to be able to complete the required operations, so next we will transfer some test funds to these two accounts.

Please sign in to the `Councilor` account and enter the user profile page. Find and click the `Transfer` button.

![Transfer button](/figure/Selection_562.png)

A transfer dialog box will pop up. You can find `Funder` and `Hunter` in the drop-down list of the payee. Please transfer 1000 OSN to each separately.

![Transfer 1000 OSN](/figure/Selection_564.png)

## You are ready

Now, the preparatory work has been completed. You can start testing the Bounty flow.
