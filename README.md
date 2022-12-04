# Image Classification

Đây là một ứng dụng phân loại hình ảnh được xây dựng bằng Django ,Next.js. Ứng dụng sử dụng Inception-ResNet-v2 để phân loại hình ảnh do người dùng chọn.
## Prerequisites
Những phần mêm và ngôn ngữ cần dùng

1. [Python]
2. [Node.js]
3. [Visual Studio Code]


## Cài đặt

### 1. Tạo môi trường ảo

Từ root chạy:

```bash
cd backend
```
```bash
python -m venv venv
```

### 2. Activate the virtual environment

từ thư mục **backend** chạy:

```bash
venv\scripts\activate
```

### 3. cài đặt thư các thư viện cần thiết

từ thư mục **backend** chạy:

```bash
pip install -r requirements.txt
```

### 4. Chạy migrations

từ thư mục **backend** chạy:

```bash
python manage.py makemigrations
```

```bash
python manage.py migrate
```

### 5. Cài đặt thư viện trong thư mục frontend

từ root chạy:

```bash
cd frontend
```
```bash
npm install
```

## Chạy dự án 

### 1. chạy backend

từ root chạy:

```bash
python manage.py runserver
```

### 2. chạy frontend

từ root chạy:

```bash
npm run dev
```

