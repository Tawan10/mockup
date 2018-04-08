
build:
	docker build -t gcr.io/yai-zero/fnm_mock .

push:
	gcloud docker -- push gcr.io/yai-zero/
	
deploy:
	kubectl create -f k8s/frontend.yaml
	kubectl create -f k8s/services.yaml
	kubectl get deployments
	kubectl get services
	kubectl get pods