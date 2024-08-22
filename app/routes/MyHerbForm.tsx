import { useState } from "react";

let nextd = 0;

export default function MyHerbForm() {
    const [name, setName] = useState('');
    const [Img , setImg] = useState('');
    const [note, setNote] = useState('');
    const [note2, setNote2] = useState('');
    const [reuse, setReuse] = useState('');
    const [produc, setProduc] = useState('');
    const [contact, setContact] = useState('');
    const [gender, setGender] = useState('');
    const [cards, setCards] = useState([]);
    const [selectedCard, setSelectedCard] = useState(null);
    const [loading, setLoading] = useState(false); // Loading state
    const [successMessage, setSuccessMessage] = useState('');

    const handleClickAdd = () => {
        if (!name || !note || !note2 || !produc || !contact ) {
            alert("กรุณากรอกข้อมูลให้ครบถ้วนครับ");
            return;
        }

        setLoading(true);
        setTimeout(() => {
            setCards([
                ...cards,
                {
                    id: nextd++,
                    name: name,
                    note: note,
                    note2: note2,
                    reuse: reuse,
                    produc: produc,
                    gender: gender,
                    contact: contact,
                    //studentNo: studentNo, // Add studentNo here
                }
            ]);
            setLoading(false);
            setSuccessMessage('เพิ่มข้อมูลสำเร็จ');
            // Clear input fields after adding the card
            setName('');
            setNote('');
            setGender('');
            setImg('');
            setNote2('');
            setProduc('');
            setReuse('');
            setContact('');
        }, 500); // Simulate network delay
    };

    const handleViewDetails = (card) => {
        setSelectedCard(card);
    };

    const handleCloseModal = () => {
        setSelectedCard(null);
    };

    const handleClearCards = () => {
        setCards([]);
        setSuccessMessage('ข้อมูลลงถังขยะเรียบร้อยแล้วนะ');
    };

    const handleCopyDetails = () => {
        const details = `
            ID: ${selectedCard.id}
            ชื่อยาสมุนไพร: ${selectedCard.name}
            ภาพตัวอย่าง: ${selectedCard.Img}
            รายละเอียด: ${selectedCard.note}
            การนำไปใช้: ${selectedCard.note2}
        `;
        navigator.clipboard.writeText(details);
        alert('รายละเอียดภายในการ์ดของคุณ');
    };

    return (
        <div className="flex flex-col items-center justify-center p-4 bg-gray-100 min-h-screen">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">เพิ่มข้อมูลยาสมุนไพร:</h1>

            {successMessage && (
                <div className="bg-green-100 text-green-800 p-4 mb-4 rounded-md shadow-md">
                    {successMessage}
                </div>
            )}

            <div className="mb-6 w-full max-w-lg">
                <label className="block text-lg font-medium text-gray-700 mb-2">ชื่อยาสมุนไพร*:</label>
                <input 
                    className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 text-lg"
                    type="text" 
                    name="cName"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>

            <div className="mb-6 w-full max-w-lg">
                <label className="block text-lg font-medium text-gray-700 mb-2">ภาพตัวอย่าง*:</label>
                <img
                    className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 text-lg"
                    src=""
                    name="cImg"
                    value={Img}
                    onChange={(e) => setImg(e.target.value)}
                />
            </div>

            <div className="mb-6 w-full max-w-lg">
                <label className="block text-lg font-medium text-gray-700 mb-2">รายละเอียด*:</label>
                <textarea 
                    className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 text-lg"
                    name="cNote"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                />
            </div>

            <div className="mb-6 w-full max-w-lg">
                <label className="block text-lg font-medium text-gray-700 mb-2">สรรพคุณ*:</label>
                <textarea 
                    className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 text-lg"
                    name="cNote2"
                    value={note2}
                    onChange={(e) => setNote2(e.target.value)}
                />
            </div>

            <div className="mb-6 w-full max-w-lg">
            <label className="block text-lg font-medium text-gray-700 mb-2">การนำไปใช้*:
            </label>
            <label className="block text-lg font-medium text-gray-700 mb-2"><input name="cReuse" value={reuse} type="radio" onChange={(e) => setReuse(e.target.value)}></input> ยาใช้ภายใน
            </label>
            <label className="block text-lg font-medium text-gray-700 mb-2"><input name="cReuse" value={reuse} type="radio" onChange={(e) => setReuse(e.target.value)}></input> ยาใช้ภายนอก
            </label>
            <label className="block text-lg font-medium text-gray-700 mb-2"><input name="cReuse" value={reuse} type="radio" onChange={(e) => setReuse(e.target.value)}></input> ยาใช้ภายในและภายนอก
            </label>
           </div>

           <div className="mb-6 w-full max-w-lg">
                <label className="block text-lg font-medium text-gray-700 mb-2">ผู้ผลิต*:</label>
                <input 
                    className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 text-lg"
                    type="text" 
                    name="cProduc"
                    value={produc}
                    onChange={(e) => setProduc(e.target.value)}
                />
            </div>

            <div className="mb-6 w-full max-w-lg">
                <label className="block text-lg font-medium text-gray-700 mb-2">ประเภทสมุนไพร*:</label>
                
                <select 
                    className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 text-lg"
                    name="cGender"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                ></select>
            </div>

            <div className="mb-6 w-full max-w-lg">
                <label className="block text-lg font-medium text-gray-700 mb-2">ติดต่อผู้ผลิต*:</label>
                <input 
                    className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 text-lg"
                    type="text"
                    name="cContact"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                />
            </div>

            <div className="flex space-x-4">
                <button 
                    className="bg-indigo-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    onClick={handleClickAdd}
                    disabled={loading}
                >
                    {loading ? "Adding..." : "เพิ่มนามบัตร"}
                </button>

                <button 
                    className="bg-red-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                    onClick={handleClearCards}
                >
                    Clear All
                </button>
            </div>

            <div className="mt-8 w-full max-w-3xl overflow-x-auto">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">MyHerbForm</h2>
                <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
                    <thead className="bg-indigo-100 text-gray-600">
                        <tr>
                            <th className="border-b border-gray-300 p-3 text-left text-sm font-medium">ID</th>
                            <th className="border-b border-gray-300 p-3 text-left text-sm font-medium">ชื่อยาสมุนไพร</th>
                            <th className="border-b border-gray-300 p-3 text-left text-sm font-medium">ภาพตัวอย่าง</th>
                            <th className="border-b border-gray-300 p-3 text-left text-sm font-medium">รายละเอียด</th>
                            <th className="border-b border-gray-300 p-3 text-left text-sm font-medium">สรรพคุณ</th>
                            <th className="border-b border-gray-300 p-3 text-left text-sm font-medium">การนำไปใช้</th>
                            <th className="border-b border-gray-300 p-3 text-left text-sm font-medium">ผู้ผลิต</th>
                            <th className="border-b border-gray-300 p-3 text-left text-sm font-medium">ประเภทสมุนไพร</th>
                            <th className="border-b border-gray-300 p-3 text-left text-sm font-medium">ติดต่อผู้ผลิต</th>
                            <th className="border-b border-gray-300 p-3 text-left text-sm font-medium">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cards.map(card => (
                            <tr key={card.id} className="hover:bg-gray-50">
                                <td className="border-b border-gray-300 p-3 text-sm text-gray-800">{card.id}</td>
                                <td className="border-b border-gray-300 p-3 text-sm text-gray-800">{card.name}</td>
                                <td className="border-b border-gray-300 p-3 text-sm text-gray-800">{card.Img}</td>
                                <td className="border-b border-gray-300 p-3 text-sm text-gray-800">{card.note}</td>
                                <td className="border-b border-gray-300 p-3 text-sm text-gray-800">{card.note2}</td>
                                <td className="border-b border-gray-300 p-3 text-sm text-gray-800">{card.reuse}</td>
                                <td className="border-b border-gray-300 p-3 text-sm text-gray-800">{card.produc}</td>
                                <td className="border-b border-gray-300 p-3 text-sm text-gray-800">{card.gender}</td>
                                <td className="border-b border-gray-300 p-3 text-sm text-gray-800">{card.contact}</td>
                                <td className="border-b border-gray-300 p-3 text-sm">
                                    <button 
                                        className="bg-green-600 text-white py-1 px-2 rounded-md shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                                        onClick={() => handleViewDetails(card)}
                                    >
                                        View
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Modal */}
            {selectedCard && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full mx-4 sm:mx-0">
                        <div className="relative">
                            <button 
                                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                                onClick={handleCloseModal}
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </button>
                            <h2 className="text-xl font-semibold text-gray-800 mb-4">Card Details</h2>
                            <p><strong>ID:</strong> {selectedCard.id}</p>
                            <p><strong>ชื่อยาสมุนไพร:</strong> {selectedCard.name}</p>
                            <p><strong>รายละเอียด:</strong> {selectedCard.note}</p>
                            <p><strong>ภาพตัวอย่าง:</strong> {selectedCard.img}</p>
                            <p><strong>สรรพคุณ:</strong> {selectedCard.note2}</p>
                            <p><strong>การนำไปใช้:</strong> {selectedCard.reuse}</p>
                            <p><strong>ผู้ผลิต:</strong> {selectedCard.produc}</p>
                            <p><strong>ประเภทสมุนไพร:</strong> {selectedCard.gender}</p>
                            <p><strong>ติดต่อผู้ผลิต:</strong> {selectedCard.contact}</p>
                            <button 
                                className="mt-4 bg-blue-600 text-white py-1 px-2 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                onClick={handleCopyDetails}
                            >
                                Copy Details
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}