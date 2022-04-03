# before running this script, make sure the db
# is started via docker (eg docker-compose up db).
# To run this script, do: `./database/openDB.sh`
# from the root directory.

ID=$(docker ps -qf "name=biljettsystem_db_1")
docker exec -it $ID bash -c '
psql -U postgres -d pvk_db_dummy
'
