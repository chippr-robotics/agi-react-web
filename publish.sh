#!/bin/bash

echo "####"
echo "# creating publishing file"
echo "####"
rm files.txt && touch files.txt

date "+%H:%M:%S   %d/%m/%y" > files.txt

echo "####"
echo "# Adding files to ipfs"
echo "####"

ipfs add -r . >> files.txt
CID=$(cat files.txt | tail -n 1 | cut -c 7-52)

echo "####"
echo "# Publishing to ipns"
echo "####"

ipfs name publish /ipfs/$CID >> files.txt

echo "####"
echo "# Saving snapshot"
echo "####"

cat files.txt | tail -n 1 | cut -c 14-75 | qrencode -t ASCII