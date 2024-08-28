# Sử dụng Node.js phiên bản 18 để build ứng dụng React
FROM node:18 AS build

# Thiết lập thư mục làm việc
WORKDIR /app

# Cài đặt dependencies
COPY package.json package-lock.json ./
RUN npm install

# Sao chép mã nguồn ứng dụng
COPY . .

# Build ứng dụng
RUN npm run build

# Sử dụng Nginx để phục vụ ứng dụng
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html

# Mở cổng 80 để Nginx có thể tiếp nhận kết nối từ bên ngoài
EXPOSE 80

# Khởi chạy Nginx
CMD ["nginx", "-g", "daemon off;"]
