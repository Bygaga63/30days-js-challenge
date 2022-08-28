# JavaScript Drum Kit

New things that I've learned:

Get node by attribute
```javascript
document.querySelector(`.key[data-key="${key}"]`);
```

Listen node transitionend animation
```javascript
document.querySelectorAll('.key').forEach(key => {
    key.addEventListener('transitionend', (e) => {
        e.target.classList.remove('play')
    })
})
```
