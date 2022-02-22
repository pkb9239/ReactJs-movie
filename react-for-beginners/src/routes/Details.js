import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Point from "../components/Point";
import styles from "../routes/Details.module.css";

function Details() {
    const { id } = useParams();
    const [detail, setDetail] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      const getDetail = async () => {
      const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
      ).json();
      setDetail(json.data.movie);
      setLoading(false);
      };
      getDetail();
      }, [id]); 
    return (
        <div className={styles.container}>
          {loading ? (
          <div className={styles.loader}>
          <span>Loading...</span>
          </div>
        ) : (
          <Point 
              key={detail.id} 
              background_image_original={detail.background_image_original}
              medium_cover_image={detail.medium_cover_image}
              url={detail.url}
              title_long={detail.title_long}
              rating={detail.rating}
              runtime={detail.runtime}
              genres={detail.genres}
              download_count={detail.download_count}             
          />
            )}
        </div>
    );
}
export default Details;