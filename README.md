# Image Processing Web Application

This project is a web-based application designed for image processing tasks, consisting of separate backend and frontend components. Follow the steps below to set up and run the application locally.

![Alt text](/app_design/img_1.png?raw=true "Title")

## Run Backend

```bash
cd backend
```

```bash
docker build -t image-processing-api .
```

```bash
docker run -d -p 4000:4000 image-processing-api
```

## Run Frontend

```bash
cd frontend
```

```bash
npm run install
```

```bash
npm run dev
```
