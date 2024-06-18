const pages = {
    link1: 'https://www.bilibili.com',
    link2: 'https://github.com/yangsqxglc/gzqmt',
    link3: '#',
    // 添加更多页面
};

function setLinks() {
    const links = document.querySelectorAll('a[id]');
    links.forEach(link => {
        const pageKey = link.getAttribute('id');
        if (pages[pageKey]) {
            link.setAttribute('href', pages[pageKey]);
        } else {
            console.error('Page not found:', pageKey);
        }
    });
}

document.addEventListener('DOMContentLoaded', setLinks);