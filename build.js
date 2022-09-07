const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');


class Compiler {
	copy(srcPath, dstPath) {
		this._prepare(srcPath, dstPath)
			.then(data => {
				fs.promises.cp(data.srcPath, data.dstPath, {force: true})
			})
			.catch(error => {
				console.log(error);
			});
		return this;
	}

	sass(srcPath, dstPath) {
		this._prepare(srcPath, dstPath)
			.then(data => {
				exec(`npx sass ${data.srcPath} ${data.dstPath}`)
			})
			.catch(error => {
				console.log(error);
			});
		return this;
	}

	_normalizePath(targetPath) {
		return path.isAbsolute(targetPath) ? targetPath : path.resolve(__dirname, targetPath);
	}

	async _prepare(srcPath, dstPath) {
		let actualSrcPath = this._normalizePath(srcPath);
		let actualDstPath = this._normalizePath(dstPath);

		try {
			await fs.promises.access(actualSrcPath);
		} catch (error) {
			console.log(actualSrcPath);
			throw Error(`Invalid src path: ${error.code}`);
		}

		let mkdirPath = path.parse(actualDstPath).dir;
		await fs.promises.mkdir(mkdirPath, {recursive: true});
		return {'srcPath': actualSrcPath, 'dstPath': actualDstPath}
	}
};


(new Compiler())
	.copy('src/index.html', 'dist/index.html')
	.copy('src/index.js', 'dist/index.js')
	.sass('src/index.scss', 'dist/index.css');
