## Grid visualizer

## How to use
To use this plugin you only have to:
1. Activate the plugin
2. add the following css vars to your own stylesheet:

```
:root {
  --grid-max-width: 'somevalue';
  --grid-count: 'somevalue';
  --grid-gap: 'somevalue';
  --grid-color: 'somevalue';
  --grid-left: 'somevalue';
  --grid-opacity: 'somevalue';
  --grid-zindex: 'somevalue';
  --grid-padding: 'somevalue';

  @media screen and (min-width: 1400px) {
    --grid-count: 'someOtherValue';
  }
}
```

As you can see, you can change the grid-count per breakpoint you want.