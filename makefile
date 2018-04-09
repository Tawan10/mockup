.PHONY: pack upload deploy status

TAG?=$(shell git rev-list HEAD --max-count=1 --abbrev-commit)
PROJECT_ID=yai-zero
APP_NAME=fnm-mock

export TAG

status:
	kubectl get deployments
	kubectl get services
	kubectl get pods

pack:
	docker build -t gcr.io/${PROJECT_ID}/${APP_NAME}:$(TAG) .

upload: ;
	gcloud docker -- push gcr.io/${PROJECT_ID}/${APP_NAME}:$(TAG)

deploy:
	envsubst < k8s/deployment.yml | kubectl apply -f -
