
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/__docusaurus/debug',
  component: ComponentCreator('/__docusaurus/debug','3d6'),
  exact: true,
},
{
  path: '/__docusaurus/debug/config',
  component: ComponentCreator('/__docusaurus/debug/config','914'),
  exact: true,
},
{
  path: '/__docusaurus/debug/content',
  component: ComponentCreator('/__docusaurus/debug/content','c28'),
  exact: true,
},
{
  path: '/__docusaurus/debug/globalData',
  component: ComponentCreator('/__docusaurus/debug/globalData','3cf'),
  exact: true,
},
{
  path: '/__docusaurus/debug/metadata',
  component: ComponentCreator('/__docusaurus/debug/metadata','31b'),
  exact: true,
},
{
  path: '/__docusaurus/debug/registry',
  component: ComponentCreator('/__docusaurus/debug/registry','0da'),
  exact: true,
},
{
  path: '/__docusaurus/debug/routes',
  component: ComponentCreator('/__docusaurus/debug/routes','244'),
  exact: true,
},
{
  path: '/',
  component: ComponentCreator('/','c59'),
  
  routes: [
{
  path: '/',
  component: ComponentCreator('/','328'),
  exact: true,
},
{
  path: '/architecture/fronted',
  component: ComponentCreator('/architecture/fronted','cb7'),
  exact: true,
},
{
  path: '/architecture/pallets',
  component: ComponentCreator('/architecture/pallets','16e'),
  exact: true,
},
{
  path: '/getting-started/off-chain-voting',
  component: ComponentCreator('/getting-started/off-chain-voting','a20'),
  exact: true,
},
{
  path: '/getting-started/preparation',
  component: ComponentCreator('/getting-started/preparation','8cc'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
