_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[25],{NQEF:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/swr-prismic-fetcher",function(){return t("W/W+")}])},QtGK:function(n,e,t){"use strict";t.d(e,"a",(function(){return y}));var i=t("o0o1"),r=t.n(i),o=t("h4VS"),l=t("HaE+"),a=t("BBZh"),u=t("VX74"),d=t("lTCR"),c=t.n(d);function _(){var n=Object(o.a)(["\n        ","\n      "]);return _=function(){return n},n}var s="https://".concat("driftwell",".prismic.io/graphql"),p="MC5YNUNDaWhBQUFDQUFHT21V.77-977-9c--_vVnvv73vv70dUCrvv73vv70677-9EO-_vQdC77-977-9HW5P77-977-9be-_vVPvv73vv73vv73vv70";function y(n){return m.apply(this,arguments)}function m(){return(m=Object(l.a)(r.a.mark((function n(e){var t;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=new u.ApolloClient({link:Object(a.PrismicLink)({uri:s,accessToken:p}),cache:new u.InMemoryCache}),n.next=3,t.query({query:c()(_(),e)}).then((function(n){return n.data})).catch((function(n){throw new Error(n)}));case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},R9qi:function(n,e,t){"use strict";t.d(e,"d",(function(){return i})),t.d(e,"a",(function(){return r})),t.d(e,"b",(function(){return o})),t.d(e,"c",(function(){return l}));var i="{\n    allProducts {\n      edges {\n        node {\n          meta_title\n        }\n      }\n    }\n  }\n",r="{\n  allFooters {\n    edges {\n      node {\n        newsletter\n        body {\n          ... on FooterBodyLink_section {\n            type\n            primary {\n              headline\n            }\n            fields {\n              link {\n                _linkType\n                ... on _Document {\n                  _meta {\n                    uid\n                    type\n                  }\n                }\n                ... on _ExternalLink {\n                  url\n                  target\n                }\n              }\n              link_label\n            }\n          }\n          ... on FooterBodySocial {\n            type\n            fields {\n              icon\n              link {\n                _linkType\n                ... on _Document {\n                  _meta {\n                    uid\n                    type\n                  }\n                }\n                ... on _ExternalLink {\n                  url\n                  target\n                }\n              }\n              link_label\n            }\n          }\n        }\n      }\n    }\n  }\n}",o="{\n  allMenus {\n    edges {\n      node {\n        _linkType\n        body {\n          ... on MenuBodyPage_link {\n            type\n            primary {\n              link {\n                _linkType\n                ... on _Document {\n                  _meta {\n                    uid\n                    type\n                  }\n                }\n                ... on _ExternalLink {\n                  url\n                  target\n                }\n              }\n              label\n            }\n          }\n          ... on MenuBodyBuy_link {\n            type\n            primary {\n              label\n            }\n            fields {\n              link {\n                _linkType\n                ... on _Document {\n                  _meta {\n                    uid\n                    type\n                  }\n                }\n                ... on _ExternalLink {\n                  url\n                  target\n                }\n              }\n              link_label\n            }\n          }\n          ... on MenuBodySocial {\n            type\n            fields {\n              icon\n              link {\n                _linkType\n                ... on _Document {\n                  _meta {\n                    uid\n                    type\n                  }\n                }\n                ... on _ExternalLink {\n                  url\n                  target\n                }\n              }\n              link_label\n            }\n          }\n        }\n      }\n    }\n  }\n}",l="{\n  allProducts {\n    edges {\n      node {\n        _meta {\n          uid\n        }\n        meta_title\n        meta_description\n        page_title\n        body {\n          ... on ProductBodyText {\n            type\n            primary {\n              usid\n              headline\n              text\n              link {\n                _linkType\n                ... on _Document {\n                  _meta {\n                    uid\n                    type\n                  }\n                }\n                ... on _ExternalLink {\n                  url\n                  target\n                }\n              }\n              link_label\n            }\n          }\n          ... on ProductBodyText___image {\n            type\n            primary {\n              usid\n              text\n              image\n              image_alignment\n            }\n            \n          }\n          ... on ProductBodyBubble {\n            type\n            primary {\n              usid\n              text\n            }\n          }\n          ... on ProductBodyFlavors {\n            type\n            primary {\n              usid\n              background\n            }\n            fields {\n              image\n              flavor\n              description\n            }\n          }\n          ... on ProductBodyHeadline___callouts {\n            type\n            primary {\n              usid\n              headline\n              image\n            }\n            fields {\n              callout_title\n              callout_description\n              callout_bubble\n            }\n          }\n          ... on ProductBodyPress {\n            type\n            primary {\n              usid\n              headline\n            }\n            fields {\n              logo\n              publisher\n              link {\n                _linkType\n                ... on _ExternalLink {\n                  url\n                  target\n                }\n              }\n            }\n          }\n          ... on ProductBodySocial {\n            type\n            primary {\n              usid\n              text\n              link_label\n              link {\n                _linkType\n                ... on _ExternalLink {\n                  url\n                  target\n                }\n              }\n            }\n            fields {\n              image\n            }\n          }\n          ... on ProductBodyCountdown {\n            type\n            primary {\n              usid\n              text\n            }\n            fields {\n              icon\n              step\n              title\n              description\n            }\n          }\n        }\n      }\n    }\n  }\n}"},"W/W+":function(n,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return d}));var i=t("q1tI"),r=t.n(i),o=t("VtrM"),l=t("QtGK"),a=t("R9qi"),u=r.a.createElement;function d(){var n=Object(o.a)(a.d,l.a),e=n.data;return n.error?u("div",null,"Failed to load"):e?(e&&console.log(e.allProducts.edges[0].node.meta_title),u("div",null,e.allProducts.edges[0].node.meta_title)):u("div",null,"Loading...")}}},[["NQEF",0,2,1,4]]]);