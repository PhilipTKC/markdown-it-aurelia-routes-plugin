import MarkdownIt from 'markdown-it';
/**
* Aurelia Route Plugin
*
* This plugin adds the load attribute to links that start with "/". This allows Aurelia to handle internal routes.
*
* It also adds the external and target attributes to links that start with "http" or "https". This allows Aurelia to handle external links.
*/
declare const aureliaRoutesPlugin: (md: MarkdownIt) => void;
export default aureliaRoutesPlugin;
