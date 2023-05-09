# Markdown It Aurelia External Links

Aurelia by default will allow you to use href and load for specifying routes.

## Usage

### Without the plugin

```md
[Aurelia](https://github.com/aurelia/aurelia)

Renders

<a href="https://github.com/aurelia/aurelia">Aurelia</a>

```

```md
Error: Instruction parser error: Children without parent in instruction part
```

### With the plugin

```md
[Aurelia](https://github.com/aurelia/aurelia)

Renders

<a href="https://github.com/aurelia/aurelia" external target="_blank">Aurelia</a>
```

Otherwise, you can set useHref to false without the need for the plugin.

```ts
Aurelia
    .register(
        RouterConfiguration.customize({
            useHref: false
        })
    )
```

Or using [MarkdownIt Anchor](https://github.com/valeriangalliat/markdown-it-anchor)

```md
[Aurelia](https://github.com/aurelia/aurelia){target="_blank" external}
```
