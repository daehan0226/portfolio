FROM amazon/aws-lambda-python:3.8
ARG FIRESTORE_TYPE
ARG LAMBDA_ENV
ENV FIRESTORE_TYPE ${FIRESTORE_TYPE}
ENV LAMBDA_ENV ${LAMBDA_ENV}

RUN /var/lang/bin/python3.8 -m pip install --upgrade pip

WORKDIR /var/task/
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY . .

CMD ["lambda_function.handler"]
