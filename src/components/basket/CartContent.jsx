import React, { useState } from 'react';
import productList from './data/productList';
import CartModalView from '../modal/CartModalView';

function CartContent() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen); // 상태를 토글하여 모달 열고 닫기
  };

  return (
    <div className="cart-content w-full min-h-screen bg-gray-100">
      <div className="layout-list w-full sm:w-[700px] mx-auto">
        <div className="divider h-[24px] bg-green-100"></div>
        <div className="content-header rounded-t-lg p-[20px_16px_10px] bg-white flex justify-between">
          <div className="group flex items-center">
            <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600 mr-2" />
            <div className="text-body font-semibold text-sm">
              <p> </p>
            </div>
          </div>
          <div className="group">
            <button className="ml-2 text-xs cursor-pointer border-box rounded-[100px] overflow-hidden px-[10px] py-[4px] shadow-[inset_0px_0px_0px_1px_rgb(235,235,235)]">
              선택 삭제
            </button>
          </div>
        </div>
        {/* <div className="product-list-info p-[0px_16px_20px] bg-white w-full">
          <div className="thumbnail rounded-lg bg-gray-200 w-[80px] h-[80px]">
            <div className="product-image w-[80px] h-[80px]"></div>
          </div>
          상품입니다
        </div> */}

        {productList.map((product, index) => (
          <div key={index} className="product-list-info p-[0px_16px_20px] bg-white w-full flex items-center space-x-4">
            <div className="thumbnail rounded-lg bg-gray-200 w-[80px] h-[80px] overflow-hidden">
              <img src={product.image} alt={product.name} className="product-image w-full h-full object-cover" />
            </div>
            <div className="content-list-vertical ">
              <div className="content-text-description gap-x-0 gap-y-[2px] mt-[2px] mb-0 mx-0">
                <div className=" text-sm text-gray-900 text-left gap-x-0 gap-y-[2px]">{product.name}</div>

                <div className="text-[13px] text-gray-400 text-left gap-x-0 gap-y-[2px]">{product.description}</div>
                <div className="text-[12px] text-gray-400 text-left gap-x-0 gap-y-[2px]">{product.variety}</div>
              </div>
              <div className=" content-list-bottom mt-2">
                <div className="text-[14px] font-semibold">{product.shippingWay}</div>
              </div>
              {/* <div className="text-sm">배송비: {product.shippingCost}</div> */}
            </div>
          </div>
        ))}

        {productList.map((product, index) => (
          <div key={index} className="content-bottom pt-[3px] pr-[16px] pb-[7px] pl-[16px] bg-white">
            <div className="title-label flex justify-between">
              <div className="title-label-cost gap-x-[2px] gap-y-0 pt-[1px] pr-0 pb-0 pl-0">
                {' '}
                <p className="text-sm text-gray-900 text-left">상품금액</p>
              </div>

              <div className="title-text-labels flex flex-col">
                <div className="labels flex gap-x-[2px] gap-y-0">
                  <p className="text-body-label-cost text-[16px] font-bold">{product.price}</p>
                </div>
              </div>
            </div>
          </div>
        ))}

        {productList.map((product, index) => (
          <div key={index} className="content-bottom pt-[3px] pr-[16px] pb-[23px] pl-[16px] bg-white">
            <div className="title-label flex justify-between">
              <div className="title-label-cost gap-x-[2px] gap-y-0 pt-[1px] pr-0 pb-0 pl-0">
                {' '}
                <p className="text-sm text-gray-500 text-left">배송비</p>
              </div>

              <div className="title-text-labels flex flex-col">
                <div className="labels flex gap-x-[2px] gap-y-0">
                  <p className="text-body-label-cost text-sm">{product.shippingCost}</p>
                </div>
              </div>
            </div>

            <div className="text-body-description gap-x-[2px] gap-y-0 mt-[2px] mb-0 mx-0 flex justify-end items-center">
              <p className="text-[13px] text-right text-gray-500">검수 완료 · 모레 9/19(목) 도착 예정</p>
              <div className="content-image rounded-full w-[16px] h-[16px] cursor-pointer">
                <picture>
                  <img src="src/assets/cartimg/question.png" alt="" />
                </picture>
              </div>
            </div>
          </div>
        ))}

        <div className="content-layout gap-x-[8px] gap-y-0 pt-0 pr-[16px] pb-[20px] pl-[16px] bg-white flex">
          <button className="rounded-lg py-[2px] px-[20px] mx-auto bg-white shadow-[inset_0px_0px_0px_1px_rgb(235,235,235)] cursor-pointer flex-1 basis-0">
            <div className="button-text flex flex-col items-center justify-center min-h-[32px]">
              <div className="button-text-body gap-x-[2px] gap-y-0 mx-auto">
                <p className="text-sm">옵션/배송 변경</p>
              </div>
            </div>
          </button>
          <button className="rounded-lg py-[2px] px-[20px] mx-auto bg-gray-900 cursor-pointer flex-1 basis-0">
            <div className="button-text flex flex-col items-center justify-center min-h-[32px]">
              <div className="button-text-body gap-x-[2px] gap-y-0 mx-auto">
                <p className="text-sm text-white">바로 주문</p>
              </div>
            </div>
          </button>
        </div>

        {productList.map((product, i) => (
          <div
            key={i}
            className={`text-collapse p-4 bg-gray-50 flex justify-between ${isModalOpen ? '' : 'rounded-b-lg'}`}>
            <div className="header">
              <div className="text-body gap-x-[2px] gap-y-0 flex items-center">
                <p className="text-sm text-gray-900 text-left w-auto">예상 결제금액</p>
              </div>
            </div>
            <div className="right">
              <div className="text-body gap-x-[2px] gap-y-0 flex items-center">
                <p className="text-sm text-gray-900 text-right w-auto font-semibold">{product.allCost}</p>
                <div className="content-image rounded-full w-[16px] h-[16px] cursor-pointer" onClick={toggleModal}>
                  <picture>
                    <img src="src/assets/cartimg/question.png" alt="" />
                  </picture>
                </div>
              </div>
            </div>
          </div>
        ))}

        <CartModalView isOpen={isModalOpen} onClose={toggleModal} />
      </div>
    </div>
  );
}

export default CartContent;
