# Markdown It Aurelia Routes Plugin

## Plugin no longer required.

## Description

Created for [Quick-Start](https://github.com/PhilipTKC/quick-start)

## Usage

### Without the plugin (External Links)

```md
[Aurelia](https://github.com/aurelia/aurelia)

Renders

<a href="https://github.com/aurelia/aurelia">Aurelia</a>
```

```md
Error: Instruction parser error: Children without parent in instruction part
```

### Without the Plugin (Internal Links)

The plugin will not add the load attribute to internal routes which will cause a page refresh.

```md
[HomePage](/home)

<a href="/home">Home</a>
```

### With the plugin (External Links)

```md
[Aurelia](https://github.com/aurelia/aurelia)

Renders

<a href="https://github.com/aurelia/aurelia" external target="_blank">Aurelia</a>
```

### With the Plugin (Internal Links)

This plugin will automatically add the load attribute to internal routes

```
[HomePage](/homepage)

<a href="/home">Home</a>
```

### Alternatives

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
