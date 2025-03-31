document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('[data-content]');

    elements.forEach(el => {
        const path = el.getAttribute('data-content');

        fetch(path)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Markdown bestand kon niet worden geladen.');
                }
                return response.text();
            })
            .then(markdown => {
                const html = marked.parse(markdown);
                el.innerHTML = html;
            })
            .catch(error => {
                el.innerHTML = `<p style="color:red;">${error.message}</p>`;
            });
    });
});
