# description
This project visulize data of the ten strongest Wireless Access Points at your current position.

# infos

Project only testet on Mac OS X 10.10.5 (Yosemite) <br/>
Shell-Script partly include AppleScript-Elements

# content

collectData.sh			— scan available APs and fill data in tsv/temp.tsv <br/>
style.css           — make the style <br/>
barChart.js         — create bar chart <br/>
d3.tip.v0.6.3.js    — add d3 tool tips <br/>
d3.v3.min.js        — d3.v3 library <br/>
table.js            — create table <br/>
index.html          — executable html <br/>

# howto

1. create a link and the variable „-s“ to use the command „airport -s“ <br/>
sudo ln -s /System/Library/PrivateFrameworks/Apple80211.framework/Versions/Current/Resources/airport/usr/local/bin/airport <br/>

2. execut collectData.sh	<br/>

3. open index.html <br/>

4. see the result<br/>

5. enjoy and have fun (feel free to extend the project)<br/>

