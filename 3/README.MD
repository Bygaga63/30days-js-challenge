# CSS Variables

New things that I've learned:

Change css variable value via document.documentElement
```javascript
document.documentElement.style.setProperty(`--color`, 'red');
```

Get data attribute map
```javascript
//<input id="blur" type="range" name="blur" min="0" max="25" value="10" data-sizing="px">
document.querySelector('input').dataset.sizing
```
