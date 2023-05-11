import MarkdownIt from 'markdown-it';
import Renderer from 'markdown-it/lib/renderer';
import Token from 'markdown-it/lib/token';

/**
* Aurelia Route Plugin
* 
* This plugin adds the load attribute to links that start with "/". This allows Aurelia to handle internal routes.
* 
* It also adds the external and target attributes to links that start with "http" or "https". This allows Aurelia to handle external links.
*/
const aureliaRoutesPlugin = (md: MarkdownIt) => {
    // Regular expression to match links with a href starting with "/"
    const linkRegex = /\[([^\]]+)\]\((\/[^)]+)\)/g;

    md.renderer.rules.link_open = (tokens: Token[], idx: number, options: MarkdownIt.Options, env: any, self: Renderer) => {
        const href = tokens[idx].attrGet('href');
        // If the href starts with "/", add the load attribute
        if (href && href.startsWith('/')) {
            tokens[idx].attrSet('load', href);
        }
        // If the href starts with "http" or "https", add the external and target attributes
        else if (href && (href.startsWith('http') || href.startsWith('https'))) {
            tokens[idx].attrSet('external', '');
            tokens[idx].attrSet('target', '_blank');
        }
        return self.renderToken(tokens, idx, options);
    };

    md.core.ruler.before('normalize', 'aurelia-routes', (state) => {
        state.src = state.src.replace(linkRegex, '<a load="$2" href="$2">$1</a>');
    });
};

export default aureliaRoutesPlugin;