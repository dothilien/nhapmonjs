var index = 1;

var imageLinks = [
    "https://hoanghamobile.com/tin-tuc/wp-content/uploads/2024/10/tai-anh-phong-canh-dep-thump.jpg",
    "https://hoanghamobile.com/tin-tuc/wp-content/webp-express/webp-images/uploads/2024/10/tai-anh-phong-canh-dep-1.jpg.webp",
    "https://hoanghamobile.com/tin-tuc/wp-content/webp-express/webp-images/uploads/2024/10/tai-anh-phong-canh-dep-2.jpg.webp",
    "https://hoanghamobile.com/tin-tuc/wp-content/webp-express/webp-images/uploads/2024/10/tai-anh-phong-canh-dep-4.jpg.webp"
];

// Hiển thị ảnh đầu tiên
document.getElementById('slide').style.backgroundImage = `url('${imageLinks[0]}')`;

document.getElementById('next').addEventListener('click', function() {
    if (index < imageLinks.length) {
        document.getElementById('slide').style.backgroundImage = `url('${imageLinks[index]}')`;
        index++;
    }
});

document.getElementById('prev').addEventListener('click', function() {
    if (index > 1) {
        index--;
        document.getElementById('slide').style.backgroundImage = `url('${imageLinks[index - 1]}')`;
    }
});
