import { useEffect } from "react";
function PageNotFound(props) {

    return (
        <div className='PageNotFoundPage'>
          <div class="404" style={{fontSize: '10vw',textAlign: 'center',padding: '10vw 20px',background: '#ddd'}}>
              404
                <p style={{fontSize: '25px'}}>Page not found</p>
          </div>
        </div>
    );
}
export default PageNotFound;
