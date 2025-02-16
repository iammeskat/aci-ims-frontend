import { BrowserMultiFormatReader } from '@zxing/browser';
import { ScanLineIcon, UploadIcon } from 'lucide-react';
import { useRef, useState } from 'react';
import Button from './core/button';

const BarcodeScanner = ({ setBarcode = () => { } }) => {
	const [result, setResult] = useState('');
	const [error, setError] = useState('');
	const [imgUrl, setImgUrl] = useState(null);
	const [isScanning, setIsScanning] = useState(false);
	const fileInputRef = useRef(null);

	const handleImageUpload = async (event) => {
		const file = event.target.files?.[0];
		if (!file) return;

		setIsScanning(true);
		setError('');
		setResult('');

		try {
			const reader = new BrowserMultiFormatReader();
			const imageUrl = URL.createObjectURL(file);
			setImgUrl(imageUrl)
			const result = await reader.decodeFromImageUrl(imageUrl);
			setBarcode(result.text)
			setResult(result.getText());
		} catch (err) {
			setError('No barcode found in the image. Please try another image.');
		} finally {
			setIsScanning(false);
		}
	};

	const handleClick = () => {
		fileInputRef.current?.click();
	};

	return (
		<div className="w-full space-y-6">
			<div className="text-center">
				{imgUrl ? (
					<img
						src={imgUrl}
						className='mx-auto h-20'
					/>
				) : (
					<ScanLineIcon className="w-12 h-12 mx-auto text-blue-500 mb-2" />
				)}
				<h2 className="text-2xl font-bold text-gray-800">
					Barcode Scanner
				</h2>
				<p className="text-gray-600">
					Upload an image containing a barcode
				</p>
			</div>

			<div className="space-y-4">
				<input
					type="file"
					ref={fileInputRef}
					onChange={handleImageUpload}
					accept="image/*"
					className="hidden"
				/>

				<Button
					onClick={handleClick}
					disabled={isScanning}
					text={isScanning ? 'Scanning...' : 'Upload Image'}
					icon={<UploadIcon className="size-5" />}
					outlined
				/>

				{error && (
					<div className="px-4 py-2 bg-red-50 border border-red-200 rounded-lg">
						<p className="text-red-600">{error}</p>
					</div>
				)}

				{result && (
					<div className="px-4 py-2 bg-green-50 border border-green-200 rounded-lg">
						<p className="font-medium text-gray-700">
							Detected Barcode:
							<span className="text-green-700 font-mono"> {result}</span>
						</p>
					</div>
				)}
			</div>
		</div>
	);
};

export default BarcodeScanner;