
# Concealing Bing AI chatbot into any html (*95861123*)

Cách dùng:
* Paste cookie ```_U``` của **bing.com** vào mục *COOKIE* trong *.env*
* Sử dụng html bất kỳ để trong thư mục **public**. Sau đó thay đổi hoặc thêm id cho các thẻ tương ứng sao cho đảm bảo các thành phần chính:
    * Một thẻ *div* với id *95861123* để lưu kết quả 
    * Một thẻ *input* với id *95861124* để chứa câu hỏi
    * Một thẻ *button* để gửi request với event ```onlick``` gọi đến hàm sau
    ```js
    function handleClick() {
        let query = document.getElementById('95861124').value;
        fetch("/query?cq=" + query)
            .then(response => response.text())
            .then(res => {
                document.getElementById('95861123').innerHTML = res
            });
    }
    ```
* Cài đặt ```npm install```
* Chạy server ```node index.js``` (Sau khi chạy có thể truy cập được bất kỳ .html trong thư mục public)
