export default {
  "title": "Opensquare Docs",
  "tagline": "Opensquare Documentations",
  "url": "https://docs.opensquare.network",
  "baseUrl": "/",
  "onBrokenLinks": "throw",
  "onBrokenMarkdownLinks": "warn",
  "favicon": "img/favicon.ico",
  "organizationName": "opensquare-network",
  "projectName": "docs",
  "themeConfig": {
    "navbar": {
      "logo": {
        "alt": "Opensquare Logo",
        "src": "img/logo.svg"
      },
      "items": [
        {
          "href": "https://github.com/opensquare-network",
          "label": "GitHub",
          "position": "right"
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "style": "dark",
      "copyright": "Copyright © 2021 Opensquare, Inc. Built with Docusaurus.",
      "links": []
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    },
    "docs": {
      "versionPersistence": "localStorage"
    },
    "metadatas": [],
    "prism": {
      "additionalLanguages": []
    },
    "hideableSidebar": false
  },
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "/Users/yoshiyuki/WebstormProjects/docs-off-chain-voting/website/sidebars.js",
          "editUrl": "https://github.com/opensquare-network/docs/tree/master/website",
          "routeBasePath": "/"
        },
        "theme": {
          "customCss": "/Users/yoshiyuki/WebstormProjects/docs-off-chain-voting/website/src/css/custom.css"
        }
      }
    ]
  ],
  "baseUrlIssueBanner": true,
  "onDuplicateRoutes": "warn",
  "customFields": {},
  "plugins": [],
  "themes": [],
  "titleDelimiter": "|",
  "noIndex": false
};