FROM python:3
WORKDIR /usr/src/app
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt
COPY . .
HEALTHCHECK CMD curl -f http://localhost/ || exit 1
EXPOSE 80
CMD ["python", "./app.py"]