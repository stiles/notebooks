# Import aliases
include ./utils/variables.make

MAKENAME = trump-blog

scrape: ## Scrape data files. 
	$(call start,$(MAKENAME))
	$(call jupyter,00-scrape-posts.ipynb)    
	$(call finish)

help: ## Show this help. 
	@egrep -h '\s##\s' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'

# Mark commands without a target
.PHONY: scrape help