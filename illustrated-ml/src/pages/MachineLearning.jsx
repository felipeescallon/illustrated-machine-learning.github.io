import Container from '../components/Container';
import { NavLink, Outlet, useOutlet } from "react-router-dom"

export function Parent() {
    return Container(
        <>
            {useOutlet()
                ? <Outlet />
                :
                <>
                    <h1>Machine Learning</h1>
                    <nav>
                        <NavLink to="categorization">Categorization</NavLink>
                        <NavLink to="ml-sampling-resampling">Sampling and Resampling</NavLink>
                        <NavLink to="bias-variance">Bias/Variance</NavLink>
                        <NavLink to="linear-algorithms">Linear Algorithms</NavLink>
                        <NavLink to="decision-tree">Decision Tree</NavLink>
                        <NavLink to="ensemble">Ensemble</NavLink>
                        <NavLink to="distance-based">Distance based algorithms</NavLink>
                        <NavLink to="optimization">Optimization</NavLink>
                        <NavLink to="loss-functions">Loss functions</NavLink>
                        <NavLink to="metrics">Model Evaluation</NavLink>
                        <NavLink to="clustering">Clustering</NavLink>
                        <NavLink to="dimensionality-reduction">Dimensionality Reduction</NavLink>
                        <NavLink to="tuning">Hyperparameters tuning</NavLink>
                    </nav>
                    <object type="image/svg+xml"
                        data={process.env.PUBLIC_URL + "/Robotics-bro.svg"}
                        className="full-screen-svg">
                    </object>
                </>

            }
        </>
    );
}

export function BiasVariance() {
    return Container(
        <>
            <div className='flex-row spaced'>
                <a className="a-arrow" href="ml-sampling-resampling.html">
                    <img src={process.env.PUBLIC_URL + "/img/icons/left.png"} className="arrow" />
                </a>
                <a className="a-arrow" href="linear-algorithms.html">
                    <img src={process.env.PUBLIC_URL + "/img/icons/right.png"} className="arrow" />
                </a>
            </div>

            <object type="image/svg+xml" data={process.env.PUBLIC_URL + "/img/machine-learning/bias-variance-01.svg"} className="img-content"></object>


            <div className='flex-row spaced'>
                <a className="a-arrow" href="ml-sampling-resampling.html">
                    <img src={process.env.PUBLIC_URL + "/img/icons/left.png"} className="arrow" />
                </a>
                <a className="a-arrow" href="linear-algorithms.html">
                    <img src={process.env.PUBLIC_URL + "/img/icons/right.png"} className="arrow" />
                </a>
            </div>
        </>
    );
}

export function Categorization() {
    return Container(
        <>
            <div className='flex-row spaced'>
                <a className="a-arrow">
                    <img src={process.env.PUBLIC_URL + "/img/icons/left.png"} className="arrow arrow-disabled" />
                </a>
                <a className="a-arrow" href="ml-sampling-resampling.html">
                    <img src={process.env.PUBLIC_URL + "/img/icons/right.png"} className="arrow" />
                </a>
            </div>

            <object type="image/svg+xml" data={process.env.PUBLIC_URL + "/img/machine-learning/categorization-01.svg"} className="img-content"></object>
        </>
    );
}

export function Clustering() {
    return Container(
        <>
            <div className='flex-row spaced'>
                <a className="a-arrow" href="metrics.html">
                    <img src={process.env.PUBLIC_URL + "/img/icons/left.png"} className="arrow" />
                </a>
                <a className="a-arrow" href="dimensionality-reduction.html">
                    <img src={process.env.PUBLIC_URL + "/img/icons/right.png"} className="arrow" />
                </a>
            </div>

            <a id="kmeans" />
            <object type="image/svg+xml" data={process.env.PUBLIC_URL + "/img/machine-learning/clustering-01.svg"} className="img-content"></object>

            <a id="hierarchical" />
            <object type="image/svg+xml" data={process.env.PUBLIC_URL + "/img/machine-learning/clustering-02.svg"} className="img-content mt-50"></object>

            <a id="dbscan" />
            <object type="image/svg+xml" data={process.env.PUBLIC_URL + "/img/machine-learning/clustering-03.svg"} className="img-content mt-50"></object>

            <a id="validity" />
            <object type="image/svg+xml" data={process.env.PUBLIC_URL + "/img/machine-learning/clustering-04.svg"} className="img-content mt-50"></object>

            <div className='flex-row spaced'>
                <a className="a-arrow" href="metrics.html">
                    <img src={process.env.PUBLIC_URL + "/img/icons/left.png"} className="arrow" />
                </a>
                <a className="a-arrow" href="dimensionality-reduction.html">
                    <img src={process.env.PUBLIC_URL + "/img/icons/right.png"} className="arrow" />
                </a>
            </div>
        </>
    );
}

export function DecisionTree() {
    return Container(
        <>
            <div className='flex-row spaced'>
                <a className="a-arrow" href="linear-algorithms.html">
                    <img src={process.env.PUBLIC_URL + "/img/icons/left.png"} className="arrow" />
                </a>
                <a className="a-arrow" href="ensemble.html">
                    <img src={process.env.PUBLIC_URL + "/img/icons/right.png"} className="arrow" />
                </a>
            </div>

            <object type="image/svg+xml" data={process.env.PUBLIC_URL + "/img/machine-learning/decision-tree-01.svg"} className="img-content"></object>

            <div className='flex-row spaced'>
                <a className="a-arrow" href="linear-algorithms.html">
                    <img src={process.env.PUBLIC_URL + "/img/icons/left.png"} className="arrow" />
                </a>
                <a className="a-arrow" href="ensemble.html">
                    <img src={process.env.PUBLIC_URL + "/img/icons/right.png"} className="arrow" />
                </a>
            </div>
        </>
    );
}

export function DimensionReduction() {
    return Container(
        <>
            <div className='flex-row spaced'>
                <a className="a-arrow" href="clustering.html">
                    <img src={process.env.PUBLIC_URL + "/img/icons/left.png"} className="arrow" />
                </a>
                <a className="a-arrow" href="tuning.html">
                    <img src={process.env.PUBLIC_URL + "/img/icons/right.png"} className="arrow" />
                </a>
            </div>


            <object type="image/svg+xml" data={process.env.PUBLIC_URL + "/img/machine-learning/dim-reduction-01.svg"} className="img-content"></object>

            <a id="pca" />
            <object type="image/svg+xml" data={process.env.PUBLIC_URL + "/img/machine-learning/dim-reduction-02.svg"} className="img-content mt-50"></object>

            <a id="ica" />
            <object type="image/svg+xml" data={process.env.PUBLIC_URL + "/img/machine-learning/dim-reduction-03.svg"} className="img-content mt-50"></object>

            <a id="lda" />
            <object type="image/svg+xml" data={process.env.PUBLIC_URL + "/img/machine-learning/dim-reduction-04.svg"} className="img-content mt-50"></object>

            <a id="tsne" />
            <object type="image/svg+xml" data={process.env.PUBLIC_URL + "/img/machine-learning/dim-reduction-05.svg"} className="img-content mt-50"></object>

            <div className='flex-row spaced'>
                <a className="a-arrow" href="clustering.html">
                    <img src={process.env.PUBLIC_URL + "/img/icons/left.png"} className="arrow" />
                </a>
                <a className="a-arrow" href="tuning.html">
                    <img src={process.env.PUBLIC_URL + "/img/icons/right.png"} className="arrow" />
                </a>
            </div>
        </>
    );
}

export function DistanceBased() {
    return Container(
        <>
            <div className='flex-row spaced'>
                <a className="a-arrow" href="ensemble.html">
                    <img src={process.env.PUBLIC_URL + "/img/icons/left.png"} className="arrow" />
                </a>
                <a className="a-arrow" href="optimization.html">
                    <img src={process.env.PUBLIC_URL + "/img/icons/right.png"} className="arrow" />
                </a>
            </div>

            <object type="image/svg+xml" data={process.env.PUBLIC_URL + "/img/machine-learning/distance-based-01.svg"} className="img-content"></object>

            <a id="knn" />
            <object type="image/svg+xml" data={process.env.PUBLIC_URL + "/img/machine-learning/distance-based-01.svg"} className="img-content mt-50"></object>

            <div className='flex-row spaced'>
                <a className="a-arrow" href="ensemble.html">
                    <img src={process.env.PUBLIC_URL + "/img/icons/left.png"} className="arrow" />
                </a>
                <a className="a-arrow" href="optimization.html">
                    <img src={process.env.PUBLIC_URL + "/img/icons/right.png"} className="arrow" />
                </a>
            </div>
        </>
    );
}

export function Ensemble() {
    return Container(
        <>
            <div className='flex-row spaced'>
                <a className="a-arrow" href="decision-tree.html">
                    <img src={process.env.PUBLIC_URL + "/img/icons/left.png"} className="arrow" />
                </a>
                <a className="a-arrow" href="distance-based.html">
                    <img src={process.env.PUBLIC_URL + "/img/icons/right.png"} className="arrow" />
                </a>
            </div>

            <a id="category" />
            <object type="image/svg+xml" data={process.env.PUBLIC_URL + "/img/machine-learning/ensemble-01.svg"} className="img-content"></object>

            <a id="random-forest" />
            <object type="image/svg+xml" data={process.env.PUBLIC_URL + "/img/machine-learning/ensemble-02.svg"} className="img-content mt-50"></object>

            <a id="adaboost" />
            <object type="image/svg+xml" data={process.env.PUBLIC_URL + "/img/machine-learning/ensemble-03.svg"} className="img-content mt-50"></object>

            <a id="gbm" />
            <object type="image/svg+xml" data={process.env.PUBLIC_URL + "/img/machine-learning/ensemble-04.svg"} className="img-content mt-50"></object>

            <a id="xgboost" />
            <object type="image/svg+xml" data={process.env.PUBLIC_URL + "/img/machine-learning/ensemble-05.svg"} className="img-content mt-50"></object>

            <div className='flex-row spaced'>
                <a className="a-arrow" href="decision-tree.html">
                    <img src={process.env.PUBLIC_URL + "/img/icons/left.png"} className="arrow" />
                </a>
                <a className="a-arrow" href="distance-based.html">
                    <img src={process.env.PUBLIC_URL + "/img/icons/right.png"} className="arrow" />
                </a>
            </div>
        </>
    );
}

export function LinearAlgo() {
    return Container(
        <>
            <div className='flex-row spaced'>
                <a className="a-arrow" href="bias-variance.html">
                    <img src={process.env.PUBLIC_URL + "/img/icons/left.png"} className="arrow" />
                </a>
                <a className="a-arrow" href="decision-tree.html">
                    <img src={process.env.PUBLIC_URL + "/img/icons/right.png"} className="arrow" />
                </a>
            </div>

            <a id="linear-regression" />
            <object type="image/svg+xml" data={process.env.PUBLIC_URL + "/img/machine-learning/linear-algorithms-01.svg"} className="img-content"></object>

            <a id="regularization" />
            <object type="image/svg+xml" data={process.env.PUBLIC_URL + "/img/machine-learning/linear-algorithms-02.svg"} className="img-content mt-50"></object>

            <a id="logistic-regression" />
            <object type="image/svg+xml" data={process.env.PUBLIC_URL + "/img/machine-learning/linear-algorithms-03.svg"} className="img-content mt-50"></object>

            <a id="support-vector-machines" />
            <object type="image/svg+xml" data={process.env.PUBLIC_URL + "/img/machine-learning/linear-algorithms-04.svg"} className="img-content mt-50"></object>

            <a id="linear-discriminant-analysis" />
            <object type="image/svg+xml" data={process.env.PUBLIC_URL + "/img/machine-learning/linear-algorithms-05.svg"} className="img-content mt-50"></object>

        </>
    );
}

export function LossFunction() {
    return Container(
        <>
            <div className='flex-row spaced'>
                <a className="a-arrow" href="optimization.html">
                    <img src={process.env.PUBLIC_URL + "/img/icons/left.png"} className="arrow" />
                </a>
                <a className="a-arrow" href="metrics.html">
                    <img src={process.env.PUBLIC_URL + "/img/icons/right.png"} className="arrow" />
                </a>
            </div>


            <object type="image/svg+xml" data={process.env.PUBLIC_URL + "/img/machine-learning/loss-functions-01.svg"} className="img-content"></object>

            <a id="classification" />
            <object type="image/svg+xml" data={process.env.PUBLIC_URL + "/img/machine-learning/loss-functions-02.svg"} className="img-content mt-50"></object>

            <a id="regression" />
            <object type="image/svg+xml" data={process.env.PUBLIC_URL + "/img/machine-learning/loss-functions-03.svg"} className="img-content mt-50"></object>

            <div className='flex-row spaced'>
                <a className="a-arrow" href="optimization.html">
                    <img src={process.env.PUBLIC_URL + "/img/icons/left.png"} className="arrow" />
                </a>
                <a className="a-arrow" href="metrics.html">
                    <img src={process.env.PUBLIC_URL + "/img/icons/right.png"} className="arrow" />
                </a>
            </div>
        </>
    );
}

export function Metrics() {
    return Container(
        <>
            <div className='flex-row spaced'>
                <a className="a-arrow" href="loss-functions.html">
                    <img src={process.env.PUBLIC_URL + "/img/icons/left.png"} className="arrow" />
                </a>
                <a className="a-arrow" href="clustering.html">
                    <img src={process.env.PUBLIC_URL + "/img/icons/right.png"} className="arrow" />
                </a>
            </div>

            <object type="image/svg+xml" data={process.env.PUBLIC_URL + "/img/machine-learning/metrics-01.svg"} className="img-content"></object>

            <a id="regression" />
            <object type="image/svg+xml" data={process.env.PUBLIC_URL + "/img/machine-learning/metrics-02.svg"} className="img-content mt-50"></object>

            <div className='flex-row spaced'>
                <a className="a-arrow" href="loss-functions.html">
                    <img src={process.env.PUBLIC_URL + "/img/icons/left.png"} className="arrow" />
                </a>
                <a className="a-arrow" href="clustering.html">
                    <img src={process.env.PUBLIC_URL + "/img/icons/right.png"} className="arrow" />
                </a>
            </div>
        </>
    );
}

export function MLSamplingReSampling() {
    return Container(
        <>
            <div className='flex-row spaced'>
                <a className="a-arrow" href="categorization.html">
                    <img src={process.env.PUBLIC_URL + "/img/icons/left.png"} className="arrow" />
                </a>
                <a className="a-arrow" href="bias-variance.html">
                    <img src={process.env.PUBLIC_URL + "/img/icons/right.png"} className="arrow" />
                </a>
            </div>

            <a id="sampling" />
            <object type="image/svg+xml" data={process.env.PUBLIC_URL + "/img/machine-learning/sampling-resampling-01.svg"} className="img-content"></object>

            <a id="resampling" />
            <object type="image/svg+xml" data={process.env.PUBLIC_URL + "/img/machine-learning/sampling-resampling-02.svg"} className="img-content mt-50"></object>

            <a id="under-oversampling" />
            <object type="image/svg+xml" data={process.env.PUBLIC_URL + "/img/machine-learning/sampling-resampling-03.svg"} className="img-content mt-50"></object>

            <div className='flex-row spaced'>
                <a className="a-arrow" href="categorization.html">
                    <img src={process.env.PUBLIC_URL + "/img/icons/left.png"} className="arrow" />
                </a>
                <a className="a-arrow" href="bias-variance.html">
                    <img src={process.env.PUBLIC_URL + "/img/icons/right.png"} className="arrow" />
                </a>
            </div>
        </>
    );
}

export function Optimization() {
    return Container(
        <>
            <div className='flex-row spaced'>
                <a className="a-arrow" href="distance-based.html">
                    <img src={process.env.PUBLIC_URL + "/img/icons/left.png"} className="arrow" />
                </a>
                <a className="a-arrow" href="loss-functions.html">
                    <img src={process.env.PUBLIC_URL + "/img/icons/right.png"} className="arrow" />
                </a>
            </div>

            <a id="erm" />
            <object type="image/svg+xml" data={process.env.PUBLIC_URL + "/img/machine-learning/optimization-01.svg"} className="img-content"></object>

            <a id="gd" />
            <object type="image/svg+xml" data={process.env.PUBLIC_URL + "/img/machine-learning/optimization-02.svg"} className="img-content mt-50"></object>

            <a id="sgd" />
            <object type="image/svg+xml" data={process.env.PUBLIC_URL + "/img/machine-learning/optimization-03.svg"} className="img-content mt-50"></object>

            <a id="mini" />
            <object type="image/svg+xml" data={process.env.PUBLIC_URL + "/img/machine-learning/optimization-04.svg"} className="img-content mt-50"></object>

            <a id="momentum" />
            <object type="image/svg+xml" data={process.env.PUBLIC_URL + "/img/machine-learning/optimization-05.svg"} className="img-content mt-50"></object>

            <a id="nesterov-momentum" />
            <object type="image/svg+xml" data={process.env.PUBLIC_URL + "/img/machine-learning/optimization-06.svg"} className="img-content mt-50"></object>

            <a id="adagrad" />
            <object type="image/svg+xml" data={process.env.PUBLIC_URL + "/img/machine-learning/optimization-07.svg"} className="img-content mt-50"></object>

            <a id="RMSProp" />
            <object type="image/svg+xml" data={process.env.PUBLIC_URL + "/img/machine-learning/optimization-08.svg"} className="img-content mt-50"></object>

            <a id="adam" />
            <object type="image/svg+xml" data={process.env.PUBLIC_URL + "/img/machine-learning/optimization-09.svg"} className="img-content mt-50"></object>

            <div className='flex-row spaced'>
                <a className="a-arrow" href="distance-based.html">
                    <img src={process.env.PUBLIC_URL + "/img/icons/left.png"} className="arrow" />
                </a>
                <a className="a-arrow" href="loss-functions.html">
                    <img src={process.env.PUBLIC_URL + "/img/icons/right.png"} className="arrow" />
                </a>
            </div>
        </>
    );
}

export function Tuning() {
    return Container(
        <>
            <div className='flex-row spaced'>
                <a className="a-arrow" href="dimensionality-reduction.html">
                    <img src={process.env.PUBLIC_URL + "/img/icons/left.png"} className="arrow" />
                </a>
                <a className="a-arrow" >
                    <img src={process.env.PUBLIC_URL + "/img/icons/right.png"} className="arrow arrow-disabled" />
                </a>
            </div>

            <object type="image/svg+xml" data={process.env.PUBLIC_URL + "/img/machine-learning/tuning-01.svg"} className="img-content"></object>

            <a id="sensitivity" />
            <object type="image/svg+xml" data={process.env.PUBLIC_URL + "/img/machine-learning/tuning-02.svg"} className="img-content mt-50"></object>

            <div className='flex-row spaced'>
                <a className="a-arrow" href="dimensionality-reduction.html">
                    <img src={process.env.PUBLIC_URL + "/img/icons/left.png"} className="arrow" />
                </a>
                <a className="a-arrow" >
                    <img src={process.env.PUBLIC_URL + "/img/icons/right.png"} className="arrow arrow-disabled" />
                </a>
            </div>
        </>
    );
}
