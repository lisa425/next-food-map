/* global kakao */
import Script from 'next/script';
import * as stores from '@/data/store_data.json';


declare global{
  interface Window{
    kakao: any;
  }
}

const DEFAULT_LAT = 37.497625203
const DEFAULT_LNG = 127.03088379

export default function Map(){
    const loadKakaoMap = () => {
        window.kakao.maps.load(() => {
            const mapContainer = document.getElementById('map')
            const mapOption = {
                center: new window.kakao.maps.LatLng(DEFAULT_LAT, DEFAULT_LNG),
                level: 3,
            }
            const map = new window.kakao.maps.Map(mapContainer, mapOption)

            //식당 데이터 마커
            stores?.['DATA']?.map((store) => {
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
            })
        })
    }

    return(
    <>
        <Script 
            strategy="afterInteractive"
            type="text/javascript"
            src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_CLIENT}&autoload=false`}
            onReady={loadKakaoMap}
        ></Script>
        <div id="map" className="w-full h-screen" style={{width:'100vw',height:'100vh'}}></div>
    </>
    )
}