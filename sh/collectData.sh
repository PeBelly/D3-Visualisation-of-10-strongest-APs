#!/bin/sh

#sh -x collectData.sh

cd ../tsv

echo zeit'\t'ssid'\t'bssid'\t'rssi'\t'channel'\t'security> temp.tsv

COUNTER=0

while [  $COUNTER -lt 15 ]; do

	DATE=$(date +"%T")

	networksetup -setairportpower en1 on

	airport -s | sort -k 3 | head -2 | tail -1 | sed 's/\,//g' | awk '{print "'"$DATE"'""\t"$1"\t"$2"\t"$3"\t"$4"\t"$7$8;}' >> temp.tsv

	networksetup -setairportpower en1 off 

	cd ..

	open index.html

	cd tsv

	let COUNTER=COUNTER+1																																											

	sleep 1

done
