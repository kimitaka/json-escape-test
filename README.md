## テスト環境

```text
> node -v
v21.6.0
> npm -v
10.2.4
```

## モックAPI起動方法

```shell
npm install
npx json-server --watch db.json -p 3000
```

## テスト用スクリプト起動方法

```shell
node ./test-json.js
```

## 出力結果

```text
> node test-json.js                      
escaped: Lorem\nipsum\ndolor\nsit\namet\neirmod\nut\nsed\ncommodo\nat\naliquyam\naliquyam\nsea\ngubergren\nest.
non-escaped: Lorem
ipsum
dolor
sit
amet
eirmod
ut
sed
commodo
at
aliquyam
aliquyam
sea
gubergren
est.
```
