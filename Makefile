# GCP settings
LOCATION := asia-northeast1-docker
PROJECT := 
REPOSITORY := 

build-docker-on-m1:
	docker buildx build --platform linux/amd64  -t nextjs-docker .

build-docker:
	docker buildx build -t nextjs-docker .

auth-gcp:
	gcloud auth login
	gcloud auth configure-docker $(LOCATION)-docker.pkg.dev

push-gcp:
	docker tag nextjs-docker $(LOCATION)-docker.pkg.dev/$(PROJECT)/$(REPOSITORY)/nextjs-docker-test
	docker push $(LOCATION).pkg.dev/$(PROJECT)/$(REPOSITORY)/nextjs-docker-test

install:
	docker compose run node npm install

run:
	docker compose run --service-ports node npm run dev