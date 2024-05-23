curl --location --request POST 'https://api.coze.com/open_api/v2/chat' \
--header 'Authorization: Bearer pat_zI8DwjQpalyA0pGNdVAGlaxCt3nhOkuyFHri9eq7nhUc1aAxAu8Kg7TRMICkr1af' \
--header 'Content-Type: application/json' \
--header 'Accept: */*' \
--header 'Host: api.coze.com' \
--header 'Connection: keep-alive' \
--data-raw '{
    "bot_id": "7341645385049341953",
    "user": "koro",
    "query": "{{橙子味巧克力蛋糕}}",
    "stream":false
}'
