from flask import Flask, request, send_file, jsonify
from flask_cors import CORS
from rembg import remove
from PIL import Image
import io

app = Flask(__name__)

CORS(app)


@app.route('/api/remove-bg', methods=['POST'])
def remove_bg():
    if 'image' not in request.files:
        return "No file part", 400

    img_file = request.files['image']
    if img_file.filename == '':
        return "No selected file", 400

    try:
        img_data = img_file.read()
        result = remove(img_data)

        output_image = Image.open(io.BytesIO(result))
        output_image_path = "output_no_bg.webp"
        output_image.save(output_image_path, format="WEBP")

        return send_file(output_image_path, mimetype='image/webp')
    except Exception as e:
        return str(e), 500


@app.route('/api', methods=['GET'])
def hello_api():
    return jsonify(message="Hi, api is working")


if __name__ == '__main__':
    app.run(debug=True, port=4000)
