PROJECTNAME := 'imperial-provileged-cryptographical-datastore'
UNIXUSAT := 1741249843255
AUTHOR := 'Sett Sarverott <sarverott@gmail.com> (https://sarverott.com/)'''

birthOfRepo:
	git init
	echo "- UNIXUSAT[${UNIXUSAT}] \n\n---\n\n" > ./README.md
	echo "# ${PROJECTNAME}" >> ./README.md
	echo ${AUTHOR} >> ./README.md
	git add *
	git commit -m "MAKE_BIRTH_OF_REPO::step==1 << readme exists, git is present"
	gh repo create ${PROJECTNAME} --public --source=. --remote=upstream
	git push
	
initialBaptismList:	
	docker init
	npm init
	gcloud init

THIS:
	node -e 'console.log(path.basename(process.cwd()))''

#FROM:
# node -e "((req)=>{req.on('data',(x)=>console.log(x));req.end()})(https.get(process.argv.pop()))" "https://raw.githubusercontent.com/Sarverott/Sarverott/refs/heads/master/README.md"
#	node -e "( (acumulator)=>https.get(process.argv.pop(),(respon)=> )({set [in]})" "https://raw.githubusercontent.com/Sarverott/Sarverott/refs/heads/master/README.md"

NOW:
# echo '> ()=> new NOW()'
#	echo '# MOMENTARY POINTER INVOCATION #'
	node -e 'console.log("UNIXUSAT=",Date.now())'

