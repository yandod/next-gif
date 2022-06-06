# What's this?

a third party app of Gfycat's API built on Next.js

# Configuration

- Gfycat [developer api key](https://developers.gfycat.com/signup/#/apiform)
- fill client id and secret in <code>docker-compose.yml</code>

# Executing on local docker

setup container and modules
```sh
make install
```

execute on local
```sh
make run
```

build docker image
```sh
make build-docker
```

# Executing on Google Cloud Platform

configure location, project and repository in <code>Makefile</code>
```sh
# GCP settings
LOCATION := asia-northeast1-docker
PROJECT := <NAME_OF_PROJECT>
REPOSITORY := <NAME_OF_REPO>
```

build docker image
```sh
make build-docker
```


build docker image on Apple silicon machine
```sh
make build-docker-on-m1
```

Authorization for GCP
```sh
make auth-gcp
```

Push docker image to GCP
```sh
make push-gcp
```







