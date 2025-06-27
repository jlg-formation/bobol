# Commandes Git

```
git init
```

```
git clone <url>.git repertoire
```

```
git branch
git checkout -b dev-issue
git branch dev-issue
git branch -d dev-issue

git branch -r
git branch -r -d dev-issue
```

```
git commit -m message
```

```
git remote
git remote -v
git remote add <remote> <url>.git
git remote remove <remote>
```

```
git fetch mon-remote ma-branche
git push mon-remote ma-branche
```

A faire en dernier recours:

```
git push --force mon-remote ma-branche
```

Et surtout ne pas faire:

```
git pull <...>
# mais
git fetch + git rebase

git merge
# mais
git rebase
```

```
git reset --hard <branch>
```

```
git config --global user.name "Jean-Louis GUENEGO"
git config --global user.email jlguenego@gmail.com
git config --global pull.rebase true

git config -l
git config -l --show-origin
```

```
git tag <tag>
```
