これはViteで複数のtsファイルを一つのjsファイルにビルドするCodinggame用環境です
npm startでvite build --watchを実行し、リアルタイムにdistへ出力します
※git管理対象は作業時に使用できるユーティリティ系と、パズル・ボットのプログラムです

★環境構築
    # 1. パッケージ管理の初期化
    npm init -y
    # 2. TypeScriptとVite（ビルドツール）のインストール
    npm install -D typescript vite