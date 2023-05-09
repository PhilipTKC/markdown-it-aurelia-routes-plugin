import MarkdownIt from 'markdown-it';
import Renderer, { RenderRule } from 'markdown-it/lib/renderer';
import Token from 'markdown-it/lib/token';

/**
* A plugin for markdown-it that adds a custom attribute to external links
* This plugin should be used when using markdown-it in an Aurelia application to automatically append the external and target attribute
*/
export const auExternalLinks = (md: MarkdownIt) => {
    const defaultRender = md.renderer.rules.link_open as RenderRule || function (tokens: Token[], idx: number, options: MarkdownIt.Options, env: any, self: Renderer) {
        return self.renderToken(tokens, idx, options);
    };

    md.renderer.rules.link_open = (tokens: Token[], idx: number, options: MarkdownIt.Options, env: any, self: Renderer) => {
        const href = tokens[idx].attrGet('href');

        if (href?.startsWith('http') || href?.startsWith('https')) {
            tokens[idx].attrSet('external', '');
            tokens[idx].attrSet('target', '_blank');
        }

        return defaultRender(tokens, idx, options, env, self);
    };
}