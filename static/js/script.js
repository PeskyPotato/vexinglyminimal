function copyToClipboard(e) {
    navigator.clipboard.writeText(e.nextSibling.getElementsByTagName("code")[0].innerText);
    e.innerText = "Copied!";
}

window.addEventListener('load', function() {
    document.querySelectorAll('pre > code').forEach(function (codeBlock) {
        var button = document.createElement('button');
        button.className = 'copy-code-button';
        button.type = 'button';
        button.innerText = 'Copy';
        button.onclick = function() {
            copyToClipboard(button);
        }

        var pre = codeBlock.parentNode;
        if (pre.parentNode.classList.contains('highlight')) {
            var highlight = pre.parentNode;
            highlight.parentNode.insertBefore(button, highlight);
        } else {
            pre.parentNode.insertBefore(button, pre);
        }
    });
})