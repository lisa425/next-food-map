import { useCallback, useEffect } from "react"
import {StoreType} from "@/interface"
import { Dispatch, SetStateAction } from 'react';

interface MarkerProps {
    map: any
    stores: any[]
    setCurrentStore: Dispatch<SetStateAction<any>>
}
export default function Markers({ map, stores, setCurrentStore }:MarkerProps){
    const loadKakaoMarkers = useCallback(() => {
        if(map){
            //식당 데이터 마커
            stores?.map((store) => {
                let imageSrc = store?.bizcnd_code_nm ? `/images/markers/${store.bizcnd_code_nm}.png` : `/images/markers/default.png`,    
                    imageSize = new window.kakao.maps.Size(40, 40), 
                    imageOption = {offset: new window.kakao.maps.Point(27, 69)}; 
      
                let markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize, imageOption)
                let markerPosition = new window.kakao.maps.LatLng(store?.y_dnts, store?.x_cnts,)
                let marker = new window.kakao.maps.Marker({
                    position:markerPosition, 
                    image:markerImage
                })
                
                marker.setMap(map)

                var content =  `<div class="infowindow">${store.upso_nm}</div>` //인포윈도우에 표시될 내용 
                
                var customOverlay = new window.kakao.maps.CustomOverlay({
                    position: markerPosition,
                    content: content,
                    xAnchor: 0.6, 
                    yAnchor: 0.6
                });

                // 마커에 마우스오버 이벤트를 등록합니다
                window.kakao.maps.event.addListener(marker, 'mouseover', function() {
                // 마커에 마우스오버 이벤트가 발생하면 인포윈도우를 마커위에 표시합니다
                    customOverlay.setMap(map);
                });

                // 마커에 마우스아웃 이벤트를 등록합니다
                window.kakao.maps.event.addListener(marker, 'mouseout', function() {
                    // 마커에 마우스아웃 이벤트가 발생하면 인포윈도우를 제거합니다
                    customOverlay.setMap(null);
                });

                //선택한 가게 저장
                window.kakao.maps.event.addListener(marker, 'click', function() {
                    setCurrentStore(store);
                })
            })
        }
    },[map, setCurrentStore, stores]);

    useEffect(() => {
        loadKakaoMarkers();
    },[loadKakaoMarkers, map])

    return (
        <></>
    )
}