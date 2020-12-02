.PHONY: package deploy

package:
	@sh -c "'$(CURDIR)/scripts/package.sh'"

deploy: package
	@sh -c "'$(CURDIR)/scripts/deploy.sh'"