run:
	deno run --allow-net  --allow-read main.ts

run-server:
	file_server public

view:
	open https://happy-rat-60.deno.dev

view-1:
	open https://happy-rat-60-6qnq8tgkg981.deno.dev

view-2:
	open https://happy-rat-60-r34pca95v9ys.deno.dev

deploy:
	deployctl deploy --save-config

deploy-production:
	deployctl deploy --prod --save-config



demo:
	deno run --allow-net main.ts


dashboard:
	open https://dash.deno.com/projects/happy-rat-60


