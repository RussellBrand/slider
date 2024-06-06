run:
	deno run --allow-net  --allow-read run_slider.ts

run-server:
	file_server public

view:
	open https://happy-rat-60.deno.dev

view-long:
	open https://happy-rat-60-6qnq8tgkg981.deno.dev

deploy:
	deployctl deploy

demo:
	deno run --allow-net main.ts


