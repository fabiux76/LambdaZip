.PHONY: package deploy

package:
	@sh -c "'$(CURDIR)/scripts/package.sh'"

deploy: package
	@sh -c "'$(CURDIR)/scripts/deploy.sh'"

local_api:
	@sh -c "'$(CURDIR)/scripts/local_api.sh'"