FROM openjdk:8-jre-alpine
WORKDIR /temp
EXPOSE 9093
ADD target/category-service.jar category-service.jar
ENTRYPOINT ["java","-jar","category-service.jar"]