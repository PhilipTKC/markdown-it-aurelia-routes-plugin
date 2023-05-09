"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.auExternalLinks = void 0;
/**
* A plugin for markdown-it that adds a custom attribute to external links
* This plugin should be used when using markdown-it in an Aurelia application to automatically append the external and target attribute
*/
const auExternalLinks = (md) => {
    const defaultRender = md.renderer.rules.link_open || function (tokens, idx, options, env, self) {
        return self.renderToken(tokens, idx, options);
    };
    md.renderer.rules.link_open = (tokens, idx, options, env, self) => {
        const href = tokens[idx].attrGet('href');
        if ((href === null || href === void 0 ? void 0 : href.startsWith('http')) || (href === null || href === void 0 ? void 0 : href.startsWith('https'))) {
            tokens[idx].attrSet('external', '');
            tokens[idx].attrSet('target', '_blank');
        }
        return defaultRender(tokens, idx, options, env, self);
    };
};
exports.auExternalLinks = auExternalLinks;
