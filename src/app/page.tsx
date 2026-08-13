import styles from './page.module.css';
import containerStyled from '@/components/custom-components/custom-container.module.css';

export default function HomePage() {
    return (
        <>
            <section className={styles.hero}>
                <h2>Welcome to My Company</h2>
                <p>We build things people love to use.</p>
            </section>

            <section>
                <div className={containerStyled.flexCenter}>
                    <div>as</div>
                    <div>bs</div>
                </div>
            </section>

            <section className={styles.posts}>
                <h2>Latest Updates</h2>

                <article className={styles.card}>
                    <h3>New Feature Launch</h3>
                    <p>We just shipped dark mode support across the whole app.</p>
                    <time dateTime="2026-08-01">August 1, 2026</time>
                </article>

                <article className={styles.card}>
                    <h3>Team Milestone</h3>
                    <p>We crossed 10,000 active users this month.</p>
                    <time dateTime="2026-07-15">July 15, 2026</time>
                </article>
            </section>
        </>
    );
}
